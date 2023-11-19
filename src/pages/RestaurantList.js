import { useState } from "react";
import HeaderBar from "../components/HeaderBar";
import { RestaurantService } from "../services/RestaurantService";
import "../styles/restaurantListPageStyles.css";
 
const RestaurantList = () => {
 
  //TODO: Initialize resturant state.
 
/**
* Fetch the list of restaurants from RestaurantService and updates the component state.
* Sets the state to display loading indicator during data fetch from service.
*/
  async function fetchRestaurantList() {
    // setRestaurantState({...restaurantState, isLoading:true})
    // data from API was strored in restaurantList.
    let restaurantsList = await RestaurantService.getRestaurantsList();
    
    // TOOD: set state accordingly.
    
  }
 
  //TODO: API CALL
 
 
 
  return (
    <div className="restaurant-list-container">
      <HeaderBar />
      <div className="restaurant-list-wrapper child">
        {/* TODO: Iterate the restaurant */}
      </div>
 
    </div>
  );
}
 
export default RestaurantList;
 