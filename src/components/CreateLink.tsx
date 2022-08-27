import { trpc } from "@/utils/trpc";
import React, { useState } from "react";

type Form = {
  slug: string;
  url: string;
};

export const CreateLink: React.FC = () => {
  const [form, setForm] = useState<Form>({ slug: "", url: "" });

  const valid = trpc.useQuery(["validSlug", { slug: form.slug }], {
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return <div>CreateLink</div>;
};
