import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

type fileT = {
  fileName: string;
  mimeType: string;
  fileSize: number;
};

export class FileUploadDto {
  @IsOptional()
  @ApiProperty({ type: 'string', format: 'binary' })
  file: fileT;
}
