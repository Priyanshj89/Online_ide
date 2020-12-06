export const add = `#include<bits/stdc++.h>
using namespace std;

int main()
{
    int a,b;
    cin>>a>>b;
    cout<<"Sum is "<<(a+b);
    return 0;
}`;

export const hello = `#include<bits/stdc++.h>
using namespace std;

int main()
{
    cout<<"Hello World "<<endl;
    return 0;
}`;

export const selectionSort = `#include<bits/stdc++.h>
using namespace std;

int main()
{
    ios_base::sync_with_stdio();
    cin.tie(NULL);

    int n,i,j;
    cin>>n;

    int a[n];
    for(i=0;i<n;i++)
    {
        cin>>a[i];
    }

    for(i=0;i<n;i++)
    {
        int temp = a[i];
        int minimum = a[i];
        int pos = i;
        for(j=i+1;j<n;j++)
        {
            if(a[j]<minimum){
                minimum = a[j];
                pos = j;
            }
        }
        a[i] = a[pos];
        a[pos] = temp;
    }


    cout<<"Array sorted in ascending Order"<<endl;
    for(i=0;i<n;i++)
    {
        cout<<a[i]<<" ";
    }
    cout<<endl;
}
`;
