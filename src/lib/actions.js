"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (previousState, formData) => {
  // const title = formData.get("title")
  // const desc = formData.get("desc")
  // const slug = formData.get('slug')
  const { title, desc, slug, userId, img } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img
    });
    await newPost.save();
    revalidatePath("/blog");
    revalidatePath("/admin");
    console.log("saved to db");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    revalidatePath("/admin");
    console.log("deleted from db");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
export const addUser = async (previousState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    revalidatePath("/blog");
    console.log("saved to db");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    revalidatePath("/admin");
    console.log("deleted from db");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
    // throw new Error("Passwords do  not match")
  }
  try {
    connectToDb();

    const user = await User.findOne({ username });
    if (user) {
      return { error: "User already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    console.log("Saved to db");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw error;
  }
};
