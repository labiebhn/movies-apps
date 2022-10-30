import {setImageUrl} from './helpers';

export const setCarouselMovieData = (data: any) => {
  let result: any = [];
  if (data) {
    for (let item of data) {
      result.push({
        id: item?.id,
        path: {uri: setImageUrl(item?.backdrop_path)},
        title: item?.title,
      });
    }
  }
  return result;
};
