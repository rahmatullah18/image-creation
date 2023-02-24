import React, { useState } from "react";
import { FormText } from "../components/content/formText/formText";
import { Container } from "../components/layout/container/container";
import { Heading } from "../components/UI/Heading/heading";
import { Image } from "../components/UI/image/image";
import { Configuration, OpenAIApi } from "openai";
import { Loading } from "../components/UI/logo/loading";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export const Home = () => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setIsLoading] = useState(false);

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await openai.createImage({
        prompt: text,
        n: 1,
        size: "512x512",
      });
      const image_url: any = response.data.data[0].url;
      setImageUrl(image_url);
    } catch (error: any) {
      alert("image not found");
    }
    setIsLoading(false);
    setText("");
  };

  return (
    <Container>
      <div className="space-y-10 md:w-[40rem]">
        <Heading>Find images based on the words you have in mind.</Heading>
        <FormText
          handleSubmit={handleOnSubmit}
          value={text}
          handleOnChange={(e) => setText(e.target.value)}
        />
        {loading ? (
          <div className="flex justify-center" title="loading">
            <Loading className="w-10 h-10 text-headline animate-spin" />
          </div>
        ) : (
          <Image urlImage={imageUrl} />
        )}
      </div>
    </Container>
  );
};
