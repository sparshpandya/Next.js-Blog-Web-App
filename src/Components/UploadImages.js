"use client";
import { GetImageUrl } from "@/actions/savePosts";
import { CldUploadButton } from "next-cloudinary";

export default function UploadImages() {
    return <CldUploadButton onSuccess={(e) => { GetImageUrl(e) }} uploadPreset="techfacts_central">Upload Image</CldUploadButton>
}