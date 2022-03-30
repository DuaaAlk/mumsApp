import { makeAutoObservable } from "mobx";
import { themeTools } from "native-base";
import authStore from "./authStore";
import { instance } from "./instance";

class AppointmentSlot {
  appointmentSlots = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchAppointmentSlots = async () => {
    try {
      const consultant = authStore.user._id;
      const response = await instance.get(`/appointmentSlot/${consultant}`);
      this.appointmentSlots = response.data;
    } catch (error) {
      console.log("Line 19: postStore -> fetchPosts -> error", error);
    }
  };

  createAppointmentSlot = async (appointmentSlot, toast) => {
    try {
      const consultantId = appointmentSlot.consultant._id;
      const response = await instance.post(
        `/user/${consultantId}/appointmentSlots`,
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
appointmentSlotStore.fetchAppointmentSlots();
export default appointmentSlotStore;
