import { TbError404 } from "react-icons/tb";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <Card className="mx-auto mt-10 w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-bold">
          <span>
            <TbError404 className="size-10" />
          </span>
          Not Found
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>The page you are looking for does not exist.</p>
      </CardContent>
    </Card>
  );
}
