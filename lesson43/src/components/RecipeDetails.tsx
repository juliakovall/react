import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

type RecipeDetailsType = {
  id: number;
  title: string;
  image: string;
  summary: string;
  instructions: string;
};

function RecipeDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState<RecipeDetailsType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information`,
          {
            params: {
              apiKey: import.meta.env.VITE_API_KEY,
            },
          },
        );

        setRecipe(response.data);
      } catch {
        setError("Failed to load recipe");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (isLoading) {
    return <p>Loading recipe...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <section className="recipe-details">
      <Link to="/" className="back-link">
        Back to recipes
      </Link>

      <h1>{recipe.title}</h1>

      <img src={recipe.image} alt={recipe.title} />

      <h2>Summary</h2>
      <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />

      <h2>Instructions</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: recipe.instructions || "No instructions found.",
        }}
      />
    </section>
  );
}

export default RecipeDetails;
