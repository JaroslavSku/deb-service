import { Data } from "./../models/model";
import axios, { AxiosResponse } from "axios";
import data from "../data/data";
const resolvers = {
  loadData: async () => {
    return data;
  },
};

export default resolvers;
