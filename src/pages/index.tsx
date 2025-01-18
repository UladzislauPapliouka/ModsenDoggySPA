import styles from './index.module.scss';
import { PageTitle } from '@components/PageTitle';
export default function IndexPage() {
  return (
    <>
      <div className={styles.image}>
        <div>
          <span>Book your doggy spa day!</span>
          <button
            style={{
              gridArea: 'submit',
              justifySelf: 'center',
            }}>
            Submit
          </button>
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/4918/aab5/58d36599ae6a3d32d30fe5507e16d3e9?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J9RqwdTRlN8Z7Z8b4Xa7LmOQACzMr1jKm0mlI2qubNPBDEKzZGjrfr66Cr8cnsTBz4X81J43yk6qyNgxO0ymNAqe0ktJqenouoTovhPu0c5pL-jYZu526Z2eqTaNPvZy-nYYYufISQRMHavuNYgfKI2ZCFP1LsH~7SKmo0mMvo9pgGZ9DKqP4CVpeRf79oZPyDxEQfKDbboRCto6m7ENX5jR1Zy8AgrxUitZR86sXOvpEQm635XW0z7n8ADD0AfPRIYJDpczB77vy4c~0QEHNyn4yHYBCR~LVgWCOE9qyEXPiXlQ1F4~ZVLdFYGDduLmqABOHvHJa1f3Ux8x~okleA__"
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
        <button
          style={{
            gridArea: 'submit',
            justifySelf: 'center',
          }}>
          See More Dog Collars
        </button>
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
        <button
          style={{
            gridArea: 'submit',
            justifySelf: 'center',
          }}>
          See More Dog Collars
        </button>
      </div>
    </>
  );
}
