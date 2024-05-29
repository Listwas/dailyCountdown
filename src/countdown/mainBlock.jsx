import s from "./mainBlock.module.css";

function MainBlock() {
  return (
    <>
      <main className={s.mainCont}>
        <div className={s.columnCont}>
          <p>COUNTDOWN</p>
          <p>time</p> {/* get time from os */}
        </div>
      </main>
    </>
  );
}
export default MainBlock;
