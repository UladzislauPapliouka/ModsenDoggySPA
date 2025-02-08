import styles from './index.module.scss';
import { PageTitle } from '../components/PageTitle';
import { Button } from '../components/Button';

export default async function IndexPage() {
  return (
    <>
      <div className={styles.image}>
        <div>
          <span>Book your doggy spa day!</span>
          <Button>Submit</Button>
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/4918/aab5/58d36599ae6a3d32d30fe5507e16d3e9?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Hc2R-3x--GR1JfA00YpoJeRlm7fBbGiRuS8cNePai8XEsK4vNpHddLs8HDDMhCeDaTFlEpBUbVpyPiF342WArkN~dz-fjoSKnBjhEWG6N8Vwz2r8hVMUMWkA0A5DuBzqYVgtWgA0HYWjFHxfA0nqNv4dJKL0ur2igwFBfJrEFsjCjmYwS0b6GbibC2eqsnIeGLVu3r8zHx5vCciyMulCQ2BTeFmtp49iRrWP2pDghotsMjNYQP4HG~yEThG1~wZZrBpWGiR62ZcrIxAOHLx9v-jFa2GvAih6R7tgsOI76dXnAXzQ1CFPt-l8NGun1-mlUnedf~sk8yuGzNPchazLNA__"
          alt=""
        />
      </div>
      <div className={styles.catalogSection}>
        <PageTitle title={'Dog Collars'} />
        <div className={styles.view}>
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/551c/ce74/c6caafac95c0f85d88583fbb4dc451b6?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p5rguvPkOYTqWIhzmUOU5Ph~yAJm8NxTik3PrQjsqH9P0hH8SdCLRraANQMvvacF~-n2lN~e3lvndxrTy~3HrzCRKniaoN8GBi3gs6kh0Az~9h-BDpgwJEMuRR8E6llEBZbNQWlTgPAdd6ZEagk0y6DVQRzYJbaVs9JDt0FsdbIrcT3tqELMKlmxSscLwvVVXFLrx4BRAJ5PEqPvbzQTIY3mZTXVmKBRIp8lpG98hMzfhM0CAGLlfDVkBbm0Gnp6uIb3O-oMHv3KWXZpcfC4uHVj76z~RC0xyQ5qEX4WvIg6u~Es3xH5XCpYPCAJKD-TgsMV~jvqXJfShb1nY8K2Ng__"
              alt=""
            />
            <div>
              <span>Leather Dog Collars with Gold Name Tag</span>
              <span>Luxe Animal Spa</span>
            </div>
            <span>CA $325.00</span>
          </div>
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/551c/ce74/c6caafac95c0f85d88583fbb4dc451b6?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p5rguvPkOYTqWIhzmUOU5Ph~yAJm8NxTik3PrQjsqH9P0hH8SdCLRraANQMvvacF~-n2lN~e3lvndxrTy~3HrzCRKniaoN8GBi3gs6kh0Az~9h-BDpgwJEMuRR8E6llEBZbNQWlTgPAdd6ZEagk0y6DVQRzYJbaVs9JDt0FsdbIrcT3tqELMKlmxSscLwvVVXFLrx4BRAJ5PEqPvbzQTIY3mZTXVmKBRIp8lpG98hMzfhM0CAGLlfDVkBbm0Gnp6uIb3O-oMHv3KWXZpcfC4uHVj76z~RC0xyQ5qEX4WvIg6u~Es3xH5XCpYPCAJKD-TgsMV~jvqXJfShb1nY8K2Ng__"
              alt=""
            />
            <div>
              <span>Leather Dog Collars with Gold Name Tag</span>
              <span>Luxe Animal Spa</span>
            </div>
            <span>CA $325.00</span>
          </div>
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/551c/ce74/c6caafac95c0f85d88583fbb4dc451b6?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p5rguvPkOYTqWIhzmUOU5Ph~yAJm8NxTik3PrQjsqH9P0hH8SdCLRraANQMvvacF~-n2lN~e3lvndxrTy~3HrzCRKniaoN8GBi3gs6kh0Az~9h-BDpgwJEMuRR8E6llEBZbNQWlTgPAdd6ZEagk0y6DVQRzYJbaVs9JDt0FsdbIrcT3tqELMKlmxSscLwvVVXFLrx4BRAJ5PEqPvbzQTIY3mZTXVmKBRIp8lpG98hMzfhM0CAGLlfDVkBbm0Gnp6uIb3O-oMHv3KWXZpcfC4uHVj76z~RC0xyQ5qEX4WvIg6u~Es3xH5XCpYPCAJKD-TgsMV~jvqXJfShb1nY8K2Ng__"
              alt=""
            />
            <div>
              <span>Leather Dog Collars with Gold Name Tag</span>
              <span>Luxe Animal Spa</span>
            </div>
            <span>CA $325.00</span>
          </div>
        </div>
        <Button>See More Dog Collars</Button>
      </div>
      <div className={styles.catalogSection}>
        <PageTitle title={'Animal Carry Ons'} />
        <div className={styles.view}>
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/551c/ce74/c6caafac95c0f85d88583fbb4dc451b6?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p5rguvPkOYTqWIhzmUOU5Ph~yAJm8NxTik3PrQjsqH9P0hH8SdCLRraANQMvvacF~-n2lN~e3lvndxrTy~3HrzCRKniaoN8GBi3gs6kh0Az~9h-BDpgwJEMuRR8E6llEBZbNQWlTgPAdd6ZEagk0y6DVQRzYJbaVs9JDt0FsdbIrcT3tqELMKlmxSscLwvVVXFLrx4BRAJ5PEqPvbzQTIY3mZTXVmKBRIp8lpG98hMzfhM0CAGLlfDVkBbm0Gnp6uIb3O-oMHv3KWXZpcfC4uHVj76z~RC0xyQ5qEX4WvIg6u~Es3xH5XCpYPCAJKD-TgsMV~jvqXJfShb1nY8K2Ng__"
              alt=""
            />
            <div>
              <span>Leather Dog Collars with Gold Name Tag</span>
              <span>Luxe Animal Spa</span>
            </div>
            <span>CA $325.00</span>
          </div>
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/551c/ce74/c6caafac95c0f85d88583fbb4dc451b6?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p5rguvPkOYTqWIhzmUOU5Ph~yAJm8NxTik3PrQjsqH9P0hH8SdCLRraANQMvvacF~-n2lN~e3lvndxrTy~3HrzCRKniaoN8GBi3gs6kh0Az~9h-BDpgwJEMuRR8E6llEBZbNQWlTgPAdd6ZEagk0y6DVQRzYJbaVs9JDt0FsdbIrcT3tqELMKlmxSscLwvVVXFLrx4BRAJ5PEqPvbzQTIY3mZTXVmKBRIp8lpG98hMzfhM0CAGLlfDVkBbm0Gnp6uIb3O-oMHv3KWXZpcfC4uHVj76z~RC0xyQ5qEX4WvIg6u~Es3xH5XCpYPCAJKD-TgsMV~jvqXJfShb1nY8K2Ng__"
              alt=""
            />
            <div>
              <span>Leather Dog Collars with Gold Name Tag</span>
              <span>Luxe Animal Spa</span>
            </div>
            <span>CA $325.00</span>
          </div>
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/551c/ce74/c6caafac95c0f85d88583fbb4dc451b6?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p5rguvPkOYTqWIhzmUOU5Ph~yAJm8NxTik3PrQjsqH9P0hH8SdCLRraANQMvvacF~-n2lN~e3lvndxrTy~3HrzCRKniaoN8GBi3gs6kh0Az~9h-BDpgwJEMuRR8E6llEBZbNQWlTgPAdd6ZEagk0y6DVQRzYJbaVs9JDt0FsdbIrcT3tqELMKlmxSscLwvVVXFLrx4BRAJ5PEqPvbzQTIY3mZTXVmKBRIp8lpG98hMzfhM0CAGLlfDVkBbm0Gnp6uIb3O-oMHv3KWXZpcfC4uHVj76z~RC0xyQ5qEX4WvIg6u~Es3xH5XCpYPCAJKD-TgsMV~jvqXJfShb1nY8K2Ng__"
              alt=""
            />
            <div>
              <span>Leather Dog Collars with Gold Name Tag</span>
              <span>Luxe Animal Spa</span>
            </div>
            <span>CA $325.00</span>
          </div>
        </div>
        <Button>See More Dog Collars</Button>
      </div>
    </>
  );
}
