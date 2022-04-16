import { CardItem } from "./CardItem";
import { NotFound } from "./NotFound";
import { useApi } from "../Context/Apihandle";
import { sortByNearest } from "./CalcDistance";

export const Cards = () => {
  const { user, getRides } = useApi();
  const sortArr = sortByNearest(getRides(), user.station_code);

  return (
    <div>
      {sortArr.length ? (
        sortArr.map((s, i) => (
          <CardItem key={i} station_code={user.station_code} {...s} />
        ))
      ) : (
        <NotFound />
      )}
    </div>
  );
};
