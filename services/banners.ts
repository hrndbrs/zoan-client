"use server";
import api from "@/config/axios";
import { Carousel } from "@/lib/types/carousel.type";

export async function getBanners() {
  try {
    const { data } = await api.get<Carousel>("/carousel?populate=*");
    return data;
  } catch (error) {}
}
