# Katalyst Component Library

## Step 1: Installation

Begin by installing the Katalyst Component Library via npm:

```bash
npm i @atomos_tech/katerpillar
```

## Step 2: Import CSS

Import the library's CSS in your root page to apply the default styles:

```typescript
import "@atomos_tech/katerpillar/style";
```

## Step 3: Configure Tailwind

You can set up the Tailwind CSS configuration by following the instructions provided [here](tailwind.config.ts).

## Step 4: Usage

With the library set up, you can start using the provided components. Below are examples of how to implement the Button and Chip components.

### Import Components

Import the required components from the `@atomos_tech/katerpillar` package:

```typescript
import { Button, Chip } from "@atomos_tech/katerpillar";
```

### Example Usage

Here is how you can integrate the Button and Chip into your page:

```typescript
<Button
    size={"sm"}
    variant={"primary-light"}
>
    Button
</Button>
<Chip
    variant="primary"
    size="md"
>
    Primary
</Chip>
```

## Example Page

Here's an example of how you might set up a simple page using the library:

```typescript
import { Button, Chip } from "@atomos_tech/katerpillar";

export default function ExamplePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Katalyst Example</h1>
      <Button
        size={"sm"}
        variant={"primary-light"}
      >
        Button
      </Button>
      <Chip
        variant="primary"
        size="md"
      >
        Primary
      </Chip>
    </div>
  );
}
```
