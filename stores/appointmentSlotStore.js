import { makeAutoObservable } from "mobx";
import { themeTools } from "native-base";
import { instance } from "./instance";

class AppointmentSlot {
  appointmentSlots = [];

  constructor() {
    makeAutoObservable(this);
  }

  createAppointmentSlot = async (appointmentSlot, toast) => {
    try {
      const consultant = appointmentSlot.consultant._id;
      const response = await instance.post(
        `/user/${consultant}/appointmentSlots`,
        appointmentSlot
      );
      this.appointmentSlots.push(response.data);
      toast.show({
        description: "Slot is added",
      });
    } catch (error) {
      console.log(
        "Line 15: appointmentSlotStore -> createAppointmentSlot -> error",
        error
      );
    }
  };
}

const appointmentSlotStore = new AppointmentSlot();
//postsStore.fetchPosts();
export default appointmentSlotStore;
