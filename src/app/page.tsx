import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Recipe {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
  id: string;
}

async function getRecipies() {
  const result = await fetch("http://localhost:4000/recipes");
  return result.json();
}

export default async function Home() {
  const data = await getRecipies();

  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {data?.map((recipe: Recipe) => (
          <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <button>View Details</button>
              {recipe.vegan && <p>Vegan</p>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
