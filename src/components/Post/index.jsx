import { ArticleNyTimes } from "phosphor-react";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./post.module.css";

import ptBr from "date-fns/locale/pt-BR";
import { format, formatDistanceToNow } from "date-fns";
import { useState } from "react";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(["post muito bacana"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();

    const newCommentText = event.target.comment.value;

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
    event.target.setCustomValidity("");
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeleteOne);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("esse campo é obrigatório");
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          name="comment"
          required
          onInvalid={handleNewCommentInvalid}
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            onDeleteComment={deleteComment}
            content={comment}
          />
        ))}
      </div>
    </article>
  );
}
