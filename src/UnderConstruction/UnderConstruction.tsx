import OpenExternalImg from "./OpenExternal.png";
import {
  container,
  contentContainer,
  textContainer,
  heading,
  subheading,
  buttonContainer,
  buttonText,
  externalLinkButton,
} from "./styles.css";

const UnderConstruction = () => {
  return (
    <div className={container}>
      <div className={contentContainer}>
        <div className={textContainer}>
          <div className={heading}>Under Construction</div>
          <div className={subheading}>
            Sorry :( this site is still being built
          </div>
        </div>
        <div className={buttonContainer}>
          <div style={{ textAlign: "center", fontSize: "1rem" }}>
            Feel free to check out my projects at my
          </div>
          <a
            target="_blank"
            href="https://araadshams2003.wixsite.com/mysite-2"
            style={{ textDecoration: "none" }}
          >
            <button className={externalLinkButton}>
              <div className={buttonText}>deprecated portfolio</div>
              <img src={OpenExternalImg} style={{ width: "20px" }} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
