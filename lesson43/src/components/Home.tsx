import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

type Recipe = {
  id: number;
  title: string;
  image: string;
};

function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [search, setSearch] = useState("pasta");
  const [query, setQuery] = useState("pasta");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await axios.get(
          "https://api.spoonacular.com/recipes/complexSearch",
          {
            params: {
              query,
              number: 6,
              apiKey: import.meta.env.VITE_API_KEY,
            },
          },
        );

        setRecipes(response.data.results);
      } catch {
        setError("Failed to load recipes");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, [query]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuery(search);
  };

  return (
    <section>
      <h1>Recipe App</h1>
      <p>Search recipes from Spoonacular API.</p>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search recipe..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading recipes...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && (
        <div className="recipes">
          {recipes.map((recipe) => (
            <Link
              to={`/recipe/${recipe.id}`}
              className="recipe-card"
              key={recipe.id}
            >
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;
