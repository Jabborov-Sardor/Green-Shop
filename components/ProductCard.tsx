import { Context, ContextType } from '@/context/Context';
import { useAxios } from '@/hook/useAxios';
import { BasketCount, LikeIcon } from '@/public/images/Icon';
import { ProductType } from '@/service/Products';
import { QueryClient, useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

const ProductCard: React.FC<{ item: ProductType }> = ({ item }) => {
  const imageUrl = item.image_url && item.image_url.length > 0 ? item.image_url[0] : '/default-image.jpg';

  const { token }: ContextType = useContext(Context);
  const router = useRouter();
  const queryClient = new QueryClient();

  async function likeClick() {
    if (!token) {
      alert("Ro'yxatdan o'tish kerak");
    } else {
      const response = await useAxios().post(`/like/${item.product_id}`, {}, {
        headers: { "Authorization": `Bearer ${token.access_token}` },
      });
      return response.data;
    }
  }

  async function basketClick() {
    if (!token) {
      alert("Ro'yxatdan o'tish kerak");
    } else {
      const response = await useAxios().post(
        `/basket/`,
        { productId: item.product_id },
        {
          headers: { "Authorization": `Bearer ${token.access_token}` },
        }
      );
      return response.data;
    }
  }

  const mutation = useMutation({
    mutationFn: () => likeClick(),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
  });

  const basketMutation = useMutation({
    mutationFn: () => basketClick(),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
  });

  return (
    <div className="w-[250px]">
      <Image
        onClick={() => router.push(`/shop/${item.product_id}`)}
        src={imageUrl}
        priority
        style={{ width: '250px', height: '250px' }}
        alt={item.product_name}
        width={250}
        height={250}
      />
      <h2>{item.product_name}</h2>
      <strong>{item.cost}</strong>
      <div className="flex items-center space-x-5">
        <button
          onClick={() => mutation.mutate()}
          className={item.liked ? 'text-red-500' : ''}
        >
          <LikeIcon />
        </button>
        <button
          onClick={() => basketMutation.mutate()}
          className={item.basket ? 'text-green-500' : ''}
        >
          <BasketCount />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
