/**
 * Represents a Post entity.
 */
export interface Post {
    /**
     * Unique identifier of the user who created the post.
     */
    userId: number;
    /**
     * Unique identifier of the post.
     */
    id: number;
    /**
     * Title of the post.
     */
    title: string;
    /**
     * Body of the post.
     */
    body: string;
}

/**
 * Represents a Comment entity.
 */
export interface Comment {
    /**
     * Unique identifier of the post that the comment belongs to.
     */
    postId: number;
    /**
     * Unique identifier of the comment.
     */
    id: number;
    /**
     * Name of the user who created the comment.
     */
    name: string;
    /**
     * Email address of the user who created the comment.
     */
    email: string;
    /**
     * Body of the comment.
     */
    body: string;
}
