import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { ChangeEvent, Fragment, useRef, useState } from 'react';

type PreviewImg = {
  name: string;
  src: string;
  file: File;
};

type ImageUploaderProps = {};

const ImageUploader = ({}: ImageUploaderProps) => {
  const [files, setFiles] = useState<PreviewImg[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const generateThumbnail = (file: File) => {
    const thumb: PreviewImg = {
      name: file.name,
      src: URL.createObjectURL(file),
      file,
    };
    return thumb;
    // setFiles([...files, thumb]);
  };

  const filesUploaded = () => {
    if (!inputRef.current?.files) {
      return;
    }

    const uploaded = [...inputRef.current.files];
    const thumbNails = uploaded.map(generateThumbnail);
    setFiles([...files, ...thumbNails]);
  };

  const removeFile = (file: PreviewImg) => {
    setFiles(files.filter((addedFile) => addedFile?.name !== file.name));
  };

  return (
    <>
      <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex text-sm text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Upload a file</span>
              <input
                ref={inputRef}
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                multiple
                onChange={filesUploaded}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        {files.map((file) => (
          <Transition
            key={file.name}
            as={Fragment}
            appear={true}
            show={true}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
          >
            <div className="relative break-inside-avoid mb-2">
              <img className="w-full rounded-md" src={file?.src} />
              <button
                type="button"
                onClick={() => removeFile(file)}
                className="bg-white rounded-full -top-2 -right-2 w-5 h-5 absolute flex items-center justify-center"
              >
                <XMarkIcon className="w-4 h-4" />
              </button>
            </div>
          </Transition>
        ))}
      </div>
    </>
  );
};

export default ImageUploader;
