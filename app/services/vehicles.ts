import {api} from './api';

const getAllVehicles = async () => {
  const {data} = await api.vehicles.getAll();
  return data;
};

const getVehiclesByPage = async (page: string | number) => {
  const {data} = await api.vehicles.getByPage(page);
  return data;
};

const getVehiclesById = async (id: number) => {
  const {data} = await api.vehicles.getById(id);
  return data;
};

const searchVehicles = async (stringParam: string) => {
  const {data} = await api.vehicles.search(stringParam);
  return data;
};

export {getAllVehicles, getVehiclesByPage, getVehiclesById, searchVehicles};
