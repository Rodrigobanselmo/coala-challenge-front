import { IconProps } from "@mui/material";

export interface IErrorResponse {
  response: {
    status: number;
    data: {
      message: string;
    };
  };
}
