---
title: "Calculators"
include: [calculator]
---

[.column]
  ##  Basic Power

  [recipe-calc :recipe="recipes.diesel-pwr"]
  [recipe-calc :recipe="recipes.petrol-pwr"]
  [recipe-calc :recipe="recipes.coal-pwr"]

  ## Tier 2 Power

  [recipe-calc :recipe="recipes.coal-pwr-station"]
  [recipe-calc :recipe="recipes.oil-pwr-station"]
  [recipe-calc :recipe="recipes.coke-pwr-station"]
  [recipe-calc :recipe="recipes.hoil-pwr-station"]

[.column]
  ## Basic Facilities

  [recipe-calc :recipe="recipes.am1"]
  [recipe-calc :recipe="recipes.am2"]

  <!-- TODO: remainder of T1 fac recipes -->

[.column]
  ## Tier 2 Facilities

  [recipe-calc :recipe="recipes.am3"]
  [recipe-calc :recipe="recipes.am4"]

  <!-- TODO: remainder of T2 fac recipes -->

  ## Tier 3 Facilities
  [recipe-calc :recipe="recipes.am5"]

  [recipe-calc-variants :recipes="recipes.scm"]

  <!-- TODO: remainder of T3 fac recipes -->
  <!-- TODO: calculator component that allows switching recipes -->

