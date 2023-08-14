import styles from "./EmailAnimation.module.css";
import classNames from "classnames";

const EmailAnimation = ({playAnimation, setPlayAnimation}) => {
    return (
      <div className={classNames(styles["email-animation-card"], playAnimation && styles["animated"])}>
        <img className={styles["confirm-icon"]} src={playAnimation == "success" ? "confirm-icon.png" : "error-icon.png"} />
        <p>{playAnimation == "success" ? "Message Sent 👍" : "Failed to send!"}</p>
        <div className={classNames(styles["progress-bar"], playAnimation == "error" && styles["error"], playAnimation && styles["animated"])} />
        <img onClick={() => setPlayAnimation(false)} src={"exit-icon.png"} className={styles["animation-exit-icon"]} />
      </div>
    )
  }

export default EmailAnimation;