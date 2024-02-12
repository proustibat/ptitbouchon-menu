const requestGoogleApi = async (range) => {
  const baseUrl =
    "https://sheets.googleapis.com/v4/spreadsheets/1aNaURa2_ZgKDd8ANxhAi2ich_g28YIooQ3TZJcQFiME/values";
  const keyApi = "AIzaSyDJANNdaB9XBpMiXyUF-UhyM9Q0-f1L9sU";
  const endpoint = `${baseUrl}/${range}?key=${keyApi}`;
  const res = await fetch(endpoint, { cache: "no-store" });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const requestMainMenu = async () => {
  const range = "'Home-MainMenu'!A2:Z1000";
  const result = await requestGoogleApi(range);
  return result.values.map(([slug, fr, en]) => {
    return {
      slug,
      fr,
      en,
    };
  });
};

export const requestCurrentSelection = async () => {
  const range = "'Home-selection'!A1:Z1000";
  const result = await requestGoogleApi(range);
  return {
    title: {
      fr: result.values[0][2],
      en: result.values[1][2],
    },
    content: {
      fr: result.values[2][2],
      en: result.values[3][2],
    },
  };
};

export const requestHappyHour = async () => {
  const titleAndDescriptionResult = await requestGoogleApi(
    "'Home-HappyHour'!A2:C3",
  );
  const contentResult = await requestGoogleApi("'Home-HappyHour'!A6:Z1000");

  return {
    title: {
      fr: titleAndDescriptionResult.values[0][1],
      en: titleAndDescriptionResult.values[0][2],
    },
    description: {
      fr: titleAndDescriptionResult.values[1][1],
      en: titleAndDescriptionResult.values[1][2],
    },
    content: contentResult.values.map((values) => {
      return {
        fr: values[0],
        en: values[1],
        price: values[2],
      };
    }),
  };
};

export const requestDrinks = async (sheet) => {
  const categoriesResult = (
    await requestGoogleApi(`'${sheet}'!A3:C1000`)
  ).values.map(([fr, en, range]) => {
    return { fr, en, range };
  });

  const allListsRequest = categoriesResult
    .filter(({ range }) => range !== undefined)
    .map(async ({ range }) => {
      return await requestGoogleApi(`'${sheet}'!${range}`);
    });

  const lists = await Promise.all(allListsRequest);

  const drinks = lists.map(({ values }, index) => {
    return {
      ...categoriesResult[index],
      list: values,
    };
  });
  return drinks;
};
