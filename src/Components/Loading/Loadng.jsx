import style from "./loading.module.css";

const Loadng = () => {
  return (
    <div
      className="relative top-0 left-0 w-screen h-screen flex items-center justify-center
     bg-white z-[101]"
    >
      <h1 className="text-green-600 text-3xl mb-2 ">Loading</h1>
      <div className={style.dots}></div>
    </div>
  );
};

export default Loadng;
