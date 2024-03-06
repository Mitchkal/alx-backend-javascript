import signupUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signupPromise = signupUser(firstName, lastName)
    .then((value) => ({ status: 'fulfilled', value }))
    .catch((error) => ({ status: 'rejected', value: error }));

  const uploadPromise = uploadPhoto(fileName)
    .then((value) => ({ status: 'fulfilled', value }))
    .catch((error) => ({ status: 'rejected', value: error }));

  return Promise.allSettled([signupPromise, uploadPromise]);
}
