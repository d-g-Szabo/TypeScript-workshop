# Notes about TypeScrip

- If you have a type error, your Vercel deployment will break.
- If you have a type error you are really really struggling with, you can use this code to deactivate it
  **!!!!!!Only for emergencies!!!!!!!!!**

```
{/* @ts-ignore */} // just before the line
// @ts-nocheck // comment on top of the file
```
