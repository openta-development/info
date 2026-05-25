# XML Exercise Authoring Guide

This document describes how to construct XML exercises used by the
system.

------------------------------------------------------------------------

# 1. Basic XML Structure

Each exercise must follow the structure below.

``` xml
<exercise>

    <exercisename>
        EXERCISE_NAME
    </exercisename>

    <global>
        var1 = value1;
        var2 = value2;
    </global>

    <text>
        TEXT EXPLAINING THE EXERCISE
    </text>

    <question key="RANDOMKEY1">

        <text>
            TEXT EXPLAINING THE QUESTION
        </text>

        <expression>
            MATHEMATICAL_EXPRESSION
        </expression>

    </question>

</exercise>
```

------------------------------------------------------------------------

# 2. Global Variables

The `<global>` section defines variables used in the exercise.

Example:

    g = 9.812 meter / second^2;
    m = 3.456 kg;
    h = 1.237 meter;

### Rules

Variables must:

-   contain **at least four significant figures**
-   avoid whole numbers
-   avoid simple fractions
-   include units when relevant

Allowed units:

    meter
    second
    kg

Example:

    g = 9.812 meter / second^2

The **student answer must NOT include units**, because units are
embedded in the variables.

------------------------------------------------------------------------

# 3. Mathematical Notation

All math inside `<text>` must be wrapped with `$...$` so that it is
MathJax compatible.

Example:

    $text: The velocity is given by $v = at$

------------------------------------------------------------------------

# 4. Angles

Angles follow strict rules.

-   angles use radians
-   **never write the word radian**
-   radians are dimensionless (value = 1)
-   avoid special angles unless explicitly requested

Example (acceptable):

    theta = 0.8735

Example (not allowed):

    theta = 45 degree
    theta = π/4

------------------------------------------------------------------------

# 5. Expression Requirements

Every variable used in

    <expression>
    </expression>

must appear in the `<global>` section.

Example:

    <expression>
    m * g * h
    </expression>

------------------------------------------------------------------------

# 6. Regex Hint System

Hints enforce rules on student answers.

Structure:

``` xml
<hint>
    <regex present="ATTRIBUTE"> REGEX </regex>
    <comment> COMMENT </comment>
</hint>
```

A hint may be placed inside:

-   `<global>`
-   `<question>`

------------------------------------------------------------------------

# 7. Regex Attributes

Possible attributes for `present=`

-   required
-   forbidden
-   necessary
-   allowed
-   encouraged
-   discouraged

------------------------------------------------------------------------

# 8. Common Regex Examples

### Forbid square root notation

``` xml
<hint>
<regex present="forbidden">sqrt</regex>
<comment>Use exponent notation instead of sqrt()</comment>
</hint>
```

### Require trigonometric form

``` xml
<hint>
<regex present="required">sin</regex>
<comment>The solution must include a sine function</comment>
</hint>
```

### Forbid numeric answers

``` xml
<hint>
<regex present="forbidden">^[0-9\.]+$</regex>
<comment>The answer must be symbolic</comment>
</hint>
```

### Encourage simplified expressions

``` xml
<hint>
<regex present="discouraged">1\*</regex>
<comment>Avoid unnecessary multiplication by 1</comment>
</hint>
```

------------------------------------------------------------------------

# 9. Complete Example Exercise

``` xml
<exercise>

<exercisename>
Potential Energy
</exercisename>

<global>
m = 2.347 kg;
g = 9.812 meter / second^2;
h = 1.764 meter;
</global>

<text>

A mass $m$ is lifted vertically by a height $h$ in a uniform gravitational field $g$.

Compute the gravitational potential energy.

</text>

<question key="PE1">

<text>

Express the gravitational potential energy.

</text>

<expression>

m * g * h

</expression>

</question>

</exercise>
```

------------------------------------------------------------------------

# 10. Example with Hint Constraints

``` xml
<exercise>

<exercisename>
Spring Energy
</exercisename>

<global>
k = 14.237 kg / second^2;
x = 0.4382 meter;
</global>

<text>

A spring with constant $k$ is stretched by $x$.

Compute the stored energy.

</text>

<question key="SE1">

<text>

Write the expression for elastic potential energy.

</text>

<expression>

1/2 * k * x^2

</expression>

<hint>
<regex present="required">x\^2</regex>
<comment>The expression must contain $x^2$</comment>
</hint>

</question>

</exercise>
```

------------------------------------------------------------------------

# 11. Author Checklist

Before finalizing an exercise:

✔ Correct XML structure\
✔ All variables defined in `<global>`\
✔ ≥4 significant figures\
✔ Units written explicitly\
✔ Math wrapped with `$...$`\
✔ No units requested in answers\
✔ No special angles unless required\
✔ Regex hints added if format constraints are needed
