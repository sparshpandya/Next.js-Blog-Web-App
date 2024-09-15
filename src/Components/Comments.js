import { fetchUserById } from "@/actions/fetchUser";
import { ShowCommentsByPostId } from "@/actions/saveComments";

export default async function Comments({ postId }) {
  const id = parseInt(postId);
  const comments = await ShowCommentsByPostId(id);
  return (
    <div className="mt-5 text-center">
      <h1>Show Comments</h1>
      {comments && comments.length > 0
        ? comments.map(async (comment,index) => {
            const user = await fetchUserById(comment.userId);
            return (
              <h3 key={index}>
                {user.isVerified &&
                  `${user.name} (Verified User) : ${comment.comment}`}
              </h3>
            );
          })
        : "No Comments!"}
    </div>
  );
}
