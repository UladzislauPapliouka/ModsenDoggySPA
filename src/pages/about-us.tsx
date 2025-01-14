import { InfoCard } from '@components/InfoCard';
import styles from './about-us.module.scss';
import { PageTitle } from '@components/PageTitle';
export default function AboutUsPage() {
  return (
    <div className={styles.container}>
      <PageTitle
        title={'About Us'}
        subtitle={' Our Owners Love Dogs and Cats Only'}
      />

      <>
        <InfoCard
          image={
            'https://s3-alpha-sig.figma.com/img/27f4/6f81/ee0d2b2390788cd09fc8e03419bbe486?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lCIsaWun032aR56z4z8cHmJBdQ1ALxM3KTcxhW9XdW~1BUftGvup-39DaGyHbc-lniv2E4M2XwVtRaHQBsewlEDw4BEPxakq8Fq1vyyDWDyMPKGGHCknkZ6h80zBb9iMfrEq7R493y5SXIlLPgWiXobFWf2A7rYz3NRlb35A3NzzII0lLRNL1XP7c4FNoedwU2Qa0o7SdeiNWUzpLWsppXFBdpFbb9JCPMa~wwjZV-htYQidbjan3JZostg8vQnz3m22bR5XMAVQhoXsNVzoMQQFK7yRVr5t4uY4EziB2RJ8sYV5SlXNbuzKMRbQvIc-sHFI-CwKgV5D47U6Ndy6Ng__'
          }
          text={
            'Here at Luxe Animal Spa we aim to provide you with the best service\n' +
            '          possible for both you and your pet! We pride ourselves in offering a\n' +
            '          true first-class experience.\n\n Our grooming equipment is top quality. We\n' +
            '          use only the most trusted brands in the industry which provides a\n' +
            '          beautiful, calming, and safe salon experience for your pets.'
          }
        />
        <InfoCard
          image={
            'https://s3-alpha-sig.figma.com/img/27f4/6f81/ee0d2b2390788cd09fc8e03419bbe486?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lCIsaWun032aR56z4z8cHmJBdQ1ALxM3KTcxhW9XdW~1BUftGvup-39DaGyHbc-lniv2E4M2XwVtRaHQBsewlEDw4BEPxakq8Fq1vyyDWDyMPKGGHCknkZ6h80zBb9iMfrEq7R493y5SXIlLPgWiXobFWf2A7rYz3NRlb35A3NzzII0lLRNL1XP7c4FNoedwU2Qa0o7SdeiNWUzpLWsppXFBdpFbb9JCPMa~wwjZV-htYQidbjan3JZostg8vQnz3m22bR5XMAVQhoXsNVzoMQQFK7yRVr5t4uY4EziB2RJ8sYV5SlXNbuzKMRbQvIc-sHFI-CwKgV5D47U6Ndy6Ng__'
          }
          reversed
          text={
            'Here at Luxe Animal Spa we aim to provide you with the best service\n' +
            '          possible for both you and your pet! We pride ourselves in offering a\n' +
            '          true first-class experience.\n\n Our grooming equipment is top quality. We\n' +
            '          use only the most trusted brands in the industry which provides a\n' +
            '          beautiful, calming, and safe salon experience for your pets.'
          }
        />
      </>
    </div>
  );
}
