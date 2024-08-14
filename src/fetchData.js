const fetchData = async (filter, setData) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/${filter}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    
    setData(data);
  } catch (error) {
    console.log(error);
    setData(null);
  }
};

export default fetchData;
