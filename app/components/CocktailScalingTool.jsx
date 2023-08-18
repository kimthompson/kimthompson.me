import { Form } from '@remix-run/react'
import { useState } from 'react'
// import { createFormArray, field, useFluentFormArray } from 'react-fluent-form'


export default function CocktailScalingTool() {
  // const arrayConfig = createFormArray() ({
  //   name: field.text(),
  //   amount: field.number(),
  // })
  // .withInitialArray([])
  // .withKeyGenerator(item => item.id)
  
  // const addIngredient = (ingredient) => {
  //   const ingredientsWithAdded = [...ingredients, ingredient]
  //   setIngredients(ingredientsWithAdded)
  // }
  //
  // const removeIngredient = (ingredient) => {
  //   const ingredientsWithoutDeleted = ingredients.filter((i) => i !== ingredient)
  //   setIngredients(ingredientsWithoutDeleted)
  // }
  
  const { formArray, addForm, removeSelf, handleSubmit } = useFluentFormArray(arrayConfig)

  const Ingredient = () => (
    <div className="flex-row flex-nowrap space-x-2 mx-1">
      <input type="text" name="ingredientName" placeholder="Ingredient Name" className="p-1 grow w-2/5" />
      <input type="number" name="ingredientAmountInOunces" placeholder="Ingredient Amount (in oz)" className="p-1 grow w-2/5" />
      {/* <button onClick={removeSelf} className="bg-pink-500 px-3 py-1" type="button">-</button> */}
    </div>
  )
  
  return (
    <Form method="post" className="flex-col space-y-6 text-black">
      <input type="text" name="recipeName" placeholder="Recipe Name" className="ml-1 p-1 w-full" />
      <input type="number" name="desiredAmountInOunces" placeholder="Desired Amount (in oz)"className="ml-1 p-1 w-full" />
      {/* {formArray.map(item => ( */}
      {/*   <Ingredient key={item.key} formItem={item} /> */}
      {/* ))} */}
      {/* <button onClick={addForm} className="bg-pink-500 px-3 py-1" type="button">+</button> */}
      {/* <button type="submit" onClick={handleSubmit} className="bg-indigo-500 px-3 py-1 w-full" type="button">Calculate</button> */}
    </Form>
  )
}
