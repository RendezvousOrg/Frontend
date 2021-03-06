import { decorate, observable } from "mobx";
import axios from "axios";

class PlanStore {
  plans = [];

  fetchPlans = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/plans/");
      this.plans = res.data;
    } catch (err) {
      console.error(err.response);
    }
  };

  addPlan = async newPlan => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/plans/", newPlan);
      this.plans.unshift(res.data);
    } catch (err) {
      console.error(err.response);
    }
  };

  getPlanById = id => {
    return this.plans.find(plan => +plan.id === +id);
  };

  findPlan = async (id, history) => {
    const res = await axios.get(`http://127.0.0.1:8000/plans/${id}/`);
    this.planToJoin = res.data;
    history.replace("/plans/join");
  };

  join = async (planID, history) => {
    await axios.post(`http://127.0.0.1:8000/plans/join/`, {
      plan: planID
    });
    history.replace(`/plans/${planID}`);
  };
}

decorate(PlanStore, {
  plans: observable
});

const planStore = new PlanStore();

export default planStore;
