const WeatherData = ({ data }) => {
  console.log(data);

  return (

      <div className="flex justify-between w-[500px] ">
        <div>
          <p className="text-[20px] font-medium leading-1">
            {data?.name} <span>{data?.sys?.country}</span>
          </p>
          <p className="text-[50px] font-bold">{(data?.main.temp - 273).toFixed()}°C</p>
          <p className="leading-[.2]">
            {new Date(Date.now()).toLocaleString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
            })}
          </p>
        </div>
        <p className="text-[20px] font-medium ">{data?.weather[0].main}</p>
      </div>
  );
};

export default WeatherData;
