import { Caption, Paragraph } from "@/components";
import Typography from "@/components/Typography";
import React from "react";

const Test = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <Typography variant="h1">H1 Headline</Typography>
      <Typography variant="h2">H2 Headline</Typography>
      <Typography variant="h3">H3 Headline</Typography>
      <Typography variant="h4">H4 Headline</Typography>
      <Typography variant="h5">H5 Headline</Typography>
      <Typography variant="h6">H6 Headline</Typography>
      <Paragraph>The quick brown fox jumps over the lazy dog</Paragraph>
      <Paragraph variant="b2">
        The quick brown fox jumps over the lazy dog
      </Paragraph>
      <Paragraph variant="b3">
        The quick brown fox jumps over the lazy dog
      </Paragraph>
      <Paragraph variant="b4">
        The quick brown fox jumps over the lazy dog
      </Paragraph>
      <Caption variant="md">
        The quick brown fox jumps over the lazy dog
      </Caption>
      <Caption>The quick brown fox jumps over the lazy dog</Caption>
    </div>
  );
};

export default Test;
