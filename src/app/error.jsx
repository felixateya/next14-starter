"use client"
const Error = ({error, reset}) => {
  return (
    <div>{error.message}
    <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}

export default Error