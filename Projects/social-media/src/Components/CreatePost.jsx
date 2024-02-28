import { useContext, useRef } from "react";
import { PostList } from "../Stores/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const usreIdElement = useRef();
  const postTitleElemen = useRef();
  const postBodyElemen = useRef();
  const reactionsElemen = useRef();
  const tagsElemen = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = usreIdElement.current.value;
    const postTitle = postTitleElemen.current.value;
    const postBody = postBodyElemen.current.value;
    const reactions = reactionsElemen.current.value;
    const tags = tagsElemen.current.value.split(" ");

    usreIdElement.current.value = "";
    postTitleElemen.current.value = "";
    postBodyElemen.current.value = "";
    reactionsElemen.current.value = "";
    tagsElemen.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          ref={usreIdElement}
          className="form-control"
          id="userId"
          placeholder="Your UserId"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElemen}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElemen}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          ref={reactionsElemen}
          className="form-control"
          id="reaction"
          placeholder="How many people react to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          ref={tagsElemen}
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
