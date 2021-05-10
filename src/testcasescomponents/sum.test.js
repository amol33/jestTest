import sum from './sum'

it("When a & b is number",()=>
{
    const result=sum(10,20);

   expect(result).toBe(30);
});