import NavBar from '../Components/NavBar'
import BackgroundBeamsDemo from '../Components/Background'
import CanvasRevealEffectDemo from '../Components/CardsHP'
import styles from './globals.css'

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}></div>
      <NavBar />
      <BackgroundBeamsDemo />
      <CanvasRevealEffectDemo />
    </>
  );
}
