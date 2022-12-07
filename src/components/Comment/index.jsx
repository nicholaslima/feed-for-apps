import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteContent() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    const likes = likeCount + 1;
    setLikeCount(likes);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/nicholaslima.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Nicholas Lima</strong>
              <time
                title="11 de Maio às 08:13h"
                dateTime="20222-05-11 08:12:36"
              >
                Cerca de há 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteContent} title="deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
