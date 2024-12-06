import React from 'react';

type BlogPost = {
  id: number;
  title: string;
  date: string;
  readTime: string;
  image: string;
};

const blogPosts: BlogPost[] = [
  { id: 1, title: 'Cactus & Succulent Care Tips', date: 'September 1', readTime: '1 min', image: 'https://s3-alpha-sig.figma.com/img/4f35/4de5/b3a1897ab9540ae4953f1e0f0ace9952?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hhZLzgj2H69pc~qE6JQc3xOc039PnQpaendooSEEO9PGZCxANc-DqPPnTY-ZGNL6nvG~zyLIU6O1Zxy3ixASKX3Qxt4XWltOpMdKwNjRfkU3srjAdlWb5RPWHcL96b3jJ8Gqog8Cmf42z9x0vfLB2418YTZ-Tth1wJrFHx-sfARuB5gvi3sV1R-ZiLwzeZ4z8cXQsAe5za5w9uhJRxQk8hKoEGfgsqUA8SQGXLmPFaG53GSLuiHSkfZkvwGxr4lXz93J7TAqvjy6sB6B3pP455BEUZLfXKSIbzSpBW6dxm6-kgljSrt9oNgQpei5k828o5aNcOoPkgmskiVGa3I6Cw__' },
  { id: 2, title: 'Top 10 Succulents for Your Home', date: 'September 13', readTime: '2 min', image: 'https://s3-alpha-sig.figma.com/img/5d6a/fe05/19b43ea40d6912ed9f6c86bde26ac437?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pp9bP-tK9pgZjdWh5Ybk~bDKSJj-mHg9G1rQcdP2jl35x9cU3zjTS3UVA4fgBMWths8H1q1q5DhD1twFC6D3I1gX4EH25VY8SrfTpcTkFIAgQ2hziSuANH2sKCVYo6t43zr8x1LYFWVXMnJNA63tJ6PSrsK~QmNAR9N0eWj0iTx-BG1veeNmWkVE4SUy36TBSwt8MK5kc7dF1hb1nytrfZ30csZ1GCzUPyiB5IAzej12imSLhDJgfQqKMJ8Qv2LlFO~XekAZtkTcrAuDaHC4gZXxRFnTaW-14uxGKSh0ZDXXHcbSbr4ojkb1L0DxmeVz6H3R4UNN5W2tHsD4JipIaw__' },
  { id: 3, title: 'Cactus & Succulent Care Tips', date: 'September 15', readTime: '5 min', image: 'https://s3-alpha-sig.figma.com/img/708d/5ac3/4916119d54b3f3ce81cb3585303dc87b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TeroBw8zTF4YIO10GTIEslg3dnOpKpex9VV8IcuV3oaA3OOkfx2ap8uSoCDNyIrn7QVuu8~n1jMhY48rgLGPfJ50mcmNc0PPR5QxoyDyDDdZMz0QCtZk6tc1zVEtlTg5Idr8Bwuze429dA0-74i~OJqbijhVziDm570Tpi2SqlLE7KeBhFK5uj9A96EocT4sSQGqgR2EnQ0KH4piJPlRVVrIx~a1tiV~bjJOyqkYh2XxfoQEcVk--wFGcLGw3ospuiZE-bwiKrb-qvjp0SHARlmZS1bGHH1mrCmi1UxS3EnY1uQTkbMFz~Qv7fQowVgC42NhHlPKfw~zNVL43hy5hg__' },
  { id: 4, title: 'Best Houseplants Room By Room', date: 'September 18', readTime: '5 min', image: 'https://s3-alpha-sig.figma.com/img/76ec/a5ae/aad8a62909bb4bd3fb02922695ada788?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FAPaReNNJ5A0mXV1f0X2gbOULjrXQoKur8saGOgHzmyZ723Q0CNdAgys~EkcL0WXDt-gqHlvnuacEDTljV1CyU1F3Rg-LX5zUnBmxjx6OIRqARrPDU33bBg28Kyr434iM8M9wdO-9v7bT~uEe0ENz~qGKQv1MoNHZQyCrP7YwXcj~f06~7-PCZjYbYq54di3hYgCtoVNjtEwl-mujrrV9WXWt2Gn4wOKYBdill57YwKD7EC9LCnc6GboFw1RvPv1~jl5iTAETDsI2SEOplV9FjWzeTVWqUKj3qpiFUbg41g13Kc7chBlXAdm3wcC4mmlAj~sWtW-uF7XD2O0TOHWPw__' },
];

const BlogSection: React.FC = () => {
  return (
    <section className='w-full container'>
      <h2 style={{ textAlign: 'center' }} className='text-3xl font-bold p-4'>Our Blog Posts</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '20px' }}>
        We are an online plant shop offering a wide range of cheap and trendy plants.
      </p>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems:"center" }}>
        {blogPosts.map((post) => (
          <div key={post.id} style={{textAlign: 'center' }}>
            <img src={post.image} alt={post.title} style={{ width: '400px', borderRadius: '10px' }} />
            <p style={{ fontSize: '14px', color: '#999', margin: '10px 0' }}>
              {post.date} · Read in {post.readTime}
            </p>
            <p style={{ fontWeight: 'bold', fontSize: '16px' }}>{post.title}</p>
            <a href="#" style={{ color: '#28a745', textDecoration: 'none' }}>
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
