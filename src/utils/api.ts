
import Cookies from 'js-cookie'
import { objectToQueryUrl } from './mutator';



export const onLogout = ({ redirectTo } = { redirectTo: '/login' }) => {
  Cookies.remove("userToken");
  setTimeout(() => {
    window.location.href = (redirectTo);
  }, 300);
};





export type typeApiProps = {
  path: string,
  objParams?: Record<string, any>,
  body?: FormData | Record<string, any> | string,
  method?: string,
  headers?: Record<string, string>,
  host?: string
}

export async function api({
  path,
  objParams,
  body,
  method,
  headers = {},
  host = (process.env.NEXT_PUBLIC_API_HOST ?? ''),
}: typeApiProps) {
  /**
   * Setup var
   */
  path = path + (path.includes('?') ? '&' : '?') + (objParams ? objectToQueryUrl(objParams) : '');



  /**
   * Get user token
   */
  const userToken = Cookies.get("userToken")
  headers['x-access-token'] = String(userToken)


  /**
   * Set content type
   */
  if (body && !(body instanceof FormData)) {
    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';
    if (typeof (body) == "object") body = JSON.stringify(body);
  }


  /**
   * Fething server
   */
  const response = fetch((host + path), {
    method: (method ?? 'get'),
    body,
    headers
  });


  /**
   * Pre return
   */
  response.then((res) => {
    /**
     * Check unauthed
     */
    if ([401, 500].includes(res.status)) onLogout();
  });


  /**
   * Return data
   */
  return response;
}