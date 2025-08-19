import { GoogleLoginAction } from "../actions/auth/GoogleLoginAction";
import { LoginUserAction } from "../actions/auth/LoginUserAction";
import { RegisterUserAction } from "../actions/auth/RegisterUserAction";
import { CreatePetAction } from "../actions/pets/CreatePetAction";
import { GetPetAction } from "../actions/pets/GetPetAction";
import { GetPetsAction } from "../actions/pets/GetPetsAction";
import { getAuthRepository, getPetRepository } from "./ServiceProvider";

const authRepository = getAuthRepository();
const petRepository = getPetRepository();

const ActionProvider = {
  login: new LoginUserAction(authRepository),
  register: new RegisterUserAction(authRepository),
  googleLogin: new GoogleLoginAction(authRepository),
  createPet: new CreatePetAction(petRepository),
  getPets: new GetPetsAction(petRepository),
  getPet: new GetPetAction(petRepository)
};

export default ActionProvider;