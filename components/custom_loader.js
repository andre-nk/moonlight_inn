import Loader from "react-loader-spinner";

export default function CustomLoader() {
  return (
    <div className="h-full flex-shrink-0 relative flex flex-col py-80 justify-center">
      <div className="self-center">
        <Loader
          type="Circles"
          color="#FFFCF1"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
}
