# Structured Expression Language (SEL)

SEL is a JSON-based expression language for defining and evaluating complex logic and transformations. It allows you to define expressions as data structures that can be stored, transmitted, and evaluated against different data contexts.

Inspired by [JsonLogic](https://jsonlogic.com/), SEL provides a way to express business rules, validations, calculations, and transformations in a language-agnostic format, but does not follow the JsonLogic specifications.

## Basic Usage

```kotlin
import io.komune.sel.SelExecutor

// Create an executor
val selExecutor = SelExecutor()

// Define an expression
val expression = """
{
  "+": [1, { "var": "user.age" }]
}
"""

// Define data (optional)
val data = """
{
  "user": {
    "name": "John",
    "age": 30
  }
}
"""

// Evaluate the expression
val result = selExecutor.evaluate(expression, data)
// result = 31
```

## Operations Reference

SEL supports a wide range of operations for different use cases. Each operation is represented as a JSON object with a single key (the operation name) and an array of arguments.

### Variable Access

The `var` operation allows you to access data from the context.

#### Basic Variable Access

```json
{ "var": "user.name" }
```

With data:
```json
{
  "user": {
    "name": "John",
    "age": 30
  }
}
```

Result: `"John"`

#### Variable Access with Default Value

```json
{ "var": ["user.address", "No address provided"] }
```

With data:
```json
{
  "user": {
    "name": "John",
    "age": 30
  }
}
```

Result: `"No address provided"`

#### Array Access

```json
{ "var": "users.0.name" }
```

With data:
```json
{
  "users": [
    { "name": "John", "age": 30 },
    { "name": "Jane", "age": 25 }
  ]
}
```

Result: `"John"`

#### Empty Path Access

```json
{ "var": "" }
```

With data:
```json
{
  "user": {
    "name": "John",
    "age": 30
  },
  "settings": {
    "theme": "dark"
  }
}
```

Result:
```json
{
  "user": {
    "name": "John",
    "age": 30
  },
  "settings": {
    "theme": "dark"
  }
}
```

### Arithmetic Operations

#### Addition (+)

```json
{ "+": [1, 2, 3] }
```

Result: `6`

#### Subtraction (-)

```json
{ "-": [10, 5] }
```

Result: `5`

#### Multiplication (*)

```json
{ "*": [2, 3, 4] }
```

Result: `24`

#### Division (/)

```json
{ "/": [10, 2] }
```

Result: `5`

#### Modulo (%)

```json
{ "%": [10, 3] }
```

Result: `1`

#### Power (pow)

```json
{ "pow": [2, 3] }
```

Result: `8`

#### Logarithm (log)

```json
{ "log": [10, 100] }
```

Result: `2` (log base 10 of 100)

### Comparison Operations

#### Less Than (<)

```json
{ "<": [5, 10] }
```

Result: `true`

Multiple values are compared in sequence:

```json
{ "<": [1, 2, 3, 4] }
```

Result: `true` (1 < 2 < 3 < 4)

#### Less Than or Equal (<=)

```json
{ "<=": [5, 5, 10] }
```

Result: `true`

#### Greater Than (>)

```json
{ ">": [10, 5] }
```

Result: `true`

#### Greater Than or Equal (>=)

```json
{ ">=": [10, 10, 5] }
```

Result: `true`

### Equality Operations

#### Equal (==)

```json
{ "==": ["hello", "hello"] }
```

Result: `true`

#### Not Equal (!=)

```json
{ "!=": [5, "5"] }
```

Result: `true`

### Logical Operations

#### And

```json
{ "and": [true, { ">": [5, 3] }, { "<": [10, 20] }] }
```

Result: `true`

#### Or

```json
{ "or": [false, { ">": [5, 10] }, { "<": [5, 10] }] }
```

Result: `true`

#### Not (!)

```json
{ "!": [false] }
```

Result: `true`

#### Double Not (!!)

```json
{ "!!": ["hello"] }
```

Result: `true` (converts value to boolean)

### Array Operations

#### Filter

```json
{
  "filter": [
    [1, 2, 3, 4, 5, 6],
    { "%": [{ "var": "item" }, 2] }
  ]
}
```

Result: `[1, 3, 5]` (filters odd numbers)

#### Map

```json
{
  "map": [
    [1, 2, 3],
    { "*": [{ "var": "item" }, 2] }
  ]
}
```

Result: `[2, 4, 6]` (doubles each number)

#### All

```json
{
  "all": [
    [1, 2, 3],
    { ">": [{ "var": "item" }, 0] }
  ]
}
```

Result: `true` (all items are greater than 0)

#### Any

```json
{
  "any": [
    [1, 2, 3],
    { ">": [{ "var": "item" }, 2] }
  ]
}
```

Result: `true` (at least one item is greater than 2)

#### None

```json
{
  "none": [
    [1, 2, 3],
    { ">": [{ "var": "item" }, 5] }
  ]
}
```

Result: `true` (no items are greater than 5)

#### In

```json
{ "in": ["banana", ["apple", "banana", "cherry"]] }
```

Result: `true` (checks if item is in array)

Also works with strings:

```json
{ "in": ["an", "banana"] }
```

Result: `true` (checks if substring is in string)

### String Operations

#### Concatenation (concat)

```json
{ "concat": ["Hello, ", { "var": "user.name" }, "!"] }
```

Result: `"Hello, John!"`

### Conditional Operations

#### If-Then-Else

```json
{
  "if": [
    { ">": [{ "var": "age" }, 18] },
    "adult",
    "minor"
  ]
}
```

Result: `"adult"` if age > 18, otherwise `"minor"`

Multiple conditions (if-elseif-else):

```json
{
  "if": [
    { "<": [{ "var": "age" }, 13] }, "child",
    { "<": [{ "var": "age" }, 20] }, "teenager",
    "adult"
  ]
}
```

## Truthy Values

In SEL, various values are evaluated as either "truthy" or "falsy" when used in boolean contexts (like in logical operations or conditions). Understanding these conversions is important for writing correct expressions.

The following values are considered **falsy**:
- `null`
- Boolean `false`
- `NaN` (Not a Number) for floating-point values

All other values are considered **truthy**, including:
- Boolean `true`
- Numbers (except NaN)
- Strings (even empty strings)
- Arrays (even empty arrays)
- Objects (even empty objects)

This is particularly important in operations like `if`, `and`, `or`, and `!!` (double not), which evaluate their arguments in a boolean context.

Example:
```json
{
  "if": [
    { "var": "user.name" },  // Any non-null username is truthy
    "Hello, user!",
    "Anonymous user"
  ]
}
```

## Advanced Features

### Iteration Data in Array Operations

When using array operations like `map`, `filter`, `all`, `any`, and `none`, you have access to additional context:

- `item`: The current item being processed
- `array`: The array being iterated
- `index`: The current index in the array
- `data`: The original data context
- `parent`: In nested array operations, references the iteration data of the parent level

Example with index:

```json
{
  "map": [
    ["a", "b", "c"],
    {
      "concat": [
        { "var": "item" },
        " at index ",
        { "var": "index" }
      ]
    }
  ]
}
```

Result: `["a at index 0", "b at index 1", "c at index 2"]`

Example with nested operations and parent reference:

```json
{
  "map": [
    [
      {"name": "Group A", "items": [1, 2, 3]},
      {"name": "Group B", "items": [4, 5, 6]}
    ],
    {
      "map": [
        { "var": "item.items" },
        {
          "concat": [
            { "var": "parent.item.name" },
            " item: ",
            { "var": "item" }
          ]
        }
      ]
    }
  ]
}
```

Result: `[["Group A item: 1", "Group A item: 2", "Group A item: 3"], ["Group B item: 4", "Group B item: 5", "Group B item: 6"]]`

## Complex Examples

### Calculating Discounts

```json
// Expression
{
  "+": [
    { "var": "base_discount" },
    { "*": [
      { "var": "loyalty_years" },
      { "var": "loyalty_multiplier" }
    ]},
    { "if": [
      { ">": [{ "var": "cart_total" }, { "var": "premium_threshold" }] },
      { "var": "premium_bonus" },
      0
    ]}
  ]
}

// Data
{
  "base_discount": 5,
  "loyalty_years": 3,
  "loyalty_multiplier": 1.5,
  "cart_total": 250,
  "premium_threshold": 200,
  "premium_bonus": 10
}

// Result: 19.5
// (5 + (3 * 1.5) + 10)
```

### Filtering Eligible Users

```json
// Expression
{
  "filter": [
    { "var": "users" },
    { "and": [
      { ">": [{ "var": "item.purchase_count" }, 5] },
      { ">": [{ "var": "item.total_spent" }, 500] },
      { "or": [
        { "==": [{ "var": "item.subscription_tier" }, "premium"] },
        { ">": [{ "var": "item.loyalty_years" }, 2] }
      ]}
    ]}
  ]
}

// Data
{
  "users": [
    { "id": 1, "name": "Alice", "purchase_count": 8, "total_spent": 750, "subscription_tier": "basic", "loyalty_years": 3 },
    { "id": 2, "name": "Bob", "purchase_count": 12, "total_spent": 1200, "subscription_tier": "premium", "loyalty_years": 1 },
    { "id": 3, "name": "Charlie", "purchase_count": 4, "total_spent": 600, "subscription_tier": "premium", "loyalty_years": 2 },
    { "id": 4, "name": "David", "purchase_count": 7, "total_spent": 450, "subscription_tier": "basic", "loyalty_years": 1 },
    { "id": 5, "name": "Eve", "purchase_count": 10, "total_spent": 900, "subscription_tier": "basic", "loyalty_years": 4 }
  ]
}

// Result:
[
  { "id": 1, "name": "Alice", "purchase_count": 8, "total_spent": 750, "subscription_tier": "basic", "loyalty_years": 3 },
  { "id": 2, "name": "Bob", "purchase_count": 12, "total_spent": 1200, "subscription_tier": "premium", "loyalty_years": 1 },
  { "id": 5, "name": "Eve", "purchase_count": 10, "total_spent": 900, "subscription_tier": "basic", "loyalty_years": 4 }
]
```
