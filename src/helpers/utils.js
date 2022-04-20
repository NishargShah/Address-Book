export const isProduction = process.env.NODE_ENV === 'production';

export const isObjEmpty = obj => Object.getOwnPropertyNames(obj).length === 0;

export const isArrEmpty = arr => !(Array.isArray(arr) && arr.length);

export const getBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export const dummyRequest = ({ onSuccess }) => {
  setTimeout(() => {
    onSuccess('ok');
  }, 0);
};
